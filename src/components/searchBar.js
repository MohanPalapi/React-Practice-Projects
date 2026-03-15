import { useState, useEffect } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [cache, setCache] = useState({});
  const [show, setShow] = useState(false);

  const fetchData = async () => {
    console.log("api log", input);
    try {
      const res = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      );
      const data = await res.json();
      setResult(data?.recipes);
      setCache((prev) => ({ ...prev, [input]: data?.recipes }));
    } catch (error) {
      console.log("failed to fetch api", error);
    }
  };

  useEffect(() => {
    if (cache[input]) {
      console.log("cache", input);
      setResult(cache[input]);
      return;
    }

    const timer = setTimeout(() => {
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="search-title">
      <h1>SearchBar</h1>
      <div className="search-input">
        <input
          type="text"
          className="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
      </div>
      <div className="result-bar">
        {show &&
          result.map((r) => (
            <span key={r.id} className="results">
              {r.name}
            </span>
          ))}
      </div>
    </div>
  );
}
