import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

export default function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 500);

  // const [debounced, setDebouonced] = useState("");

  // useEffect(() => {
  //   const id = setTimeout(() => setDebouonced(query), 500);
  //   return () => clearTimeout(id);
  // }, [query]);

  useEffect(() => {
    console.log("searched:", debounced);
  }, [debounced]);

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
