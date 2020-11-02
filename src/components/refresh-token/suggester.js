import React, { useEffect, useState, useCallback } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import { preparePrefix } from "./prefix-tools";

function getSuggestions(list, prefix) {
  return list
    .reduce(function (a, value) {
      if (value.startsWith(prefix) && a.indexOf(value) === -1) {
        return [...a, value];
      }
      return a;
    }, [])
    .sort(function (a, b) {
      if (a.length < b.length) {
        return -1;
      }
      return 1;
    });
}

function Item({ label, onClick, focused }) {
  return (
    <MenuItem
      onClick={(e) => {
        e.stopPropagation();
        onClick(label);
      }}
      selected={focused}
    >
      {label}
    </MenuItem>
  );
}

function SuggestionMenu({ items, onClick, focused }) {
  if (items.length) {
    return (
      <Paper elevation={1} component="div" className="menu-items">
        <MenuList>
          {items.map(function (label, i) {
            return (
              <Item
                key={label}
                label={label}
                onClick={onClick}
                focused={focused === i}
              />
            );
          })}
        </MenuList>
      </Paper>
    );
  }
  return null;
}

function Suggester({ list = [], onChange, className, onSubmit }) {
  const [suggestions, setSuggestions] = useState([]);
  const [focused, setFocused] = useState(0);
  const [prefix, setPrefix] = useState("");

  const onChangeCallback = useCallback(
    function (e) {
      setPrefix(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  const onClickCallback = useCallback(
    function (name) {
      onSubmit(name);
    },
    [onSubmit]
  );

  useEffect(
    function () {
      if (prefix.length) {
        const prepared = preparePrefix(prefix);
        setSuggestions(getSuggestions(list, prepared));
      } else {
        setSuggestions([]);
      }
    },
    [prefix, list]
  );

  const onKeyDown = useCallback(
    function (e) {
      if (e.key === "ArrowDown") {
        setFocused(Math.min(focused + 1, suggestions.length - 1));
      } else if (e.key === "ArrowUp") {
        setFocused(Math.max(focused - 1, 0));
      } else if (e.key === "Enter") {
        if (suggestions.length) {
          onSubmit(suggestions[focused]);
        }
      }
    },
    [focused, suggestions, onSubmit]
  );

  return (
    <>
      <TextField
        label="Nom de l'application"
        variant="outlined"
        onChange={onChangeCallback}
        className={className}
        onKeyDown={onKeyDown}
      />
      <SuggestionMenu
        items={suggestions}
        onClick={onClickCallback}
        focused={focused}
      />
    </>
  );
}

export default Suggester;
