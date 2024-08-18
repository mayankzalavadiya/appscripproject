import React, { useEffect, useState } from "react";
import "./Mainsection.css";
import Card from "./Card";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const MainSection = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    dropdown: false,
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
    dropdown7: false,
  });
  const [selectedCategories, setSelectedCategories] = useState({
    "IDEAL FOR": [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    "suitable for": [],
    "raw materials": [],
    Pattern: [],
  });
  const [filterVisible, setFilterVisible] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedCategories((prev) => {
      const selected = prev[category];
      if (selected.includes(value)) {
        return {
          ...prev,
          [category]: selected.filter((item) => item !== value),
        };
      } else {
        return { ...prev, [category]: [...selected, value] };
      }
    });
  };

  const renderDropdown = (name, items) => (
    <div className="ideal_for">
      <div className="drop">
        <div>{name.toUpperCase()}</div>
        {dropdowns[name] ? (
          <RiArrowUpSLine
            className="drop-icon"
            onClick={() => toggleDropdown(name)}
          />
        ) : (
          <RiArrowDownSLine
            className="drop-icon"
            onClick={() => toggleDropdown(name)}
          />
        )}
      </div>
      <p>ALL</p>
      {dropdowns[name] && (
        <div className="category">
          <p className="unselect">UNSELECT ALL</p>
          {items.map((item, index) => (
            <div key={index} className="type">
              <input
                type="checkbox"
                className="check-box"
                checked={selectedCategories[name]?.includes(item)}
                onChange={() => handleCheckboxChange(name, item)}
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const filteredData = data.filter((item) => {
    const itemTitle = item.title ? item.title.toLowerCase() : "";
    const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : "";

    const idealFor = selectedCategories["IDEAL FOR"];
    const matchesSearch = itemTitle.includes(searchQueryLower);

    if (idealFor.length > 0) {
      return (
        matchesSearch &&
        idealFor.some((category) =>
          item.category.toLowerCase().includes(category.toLowerCase())
        )
      );
    }

    return matchesSearch;
  });

  return (
    <div className="main-section">
      <div className="mainsection">
        <div className="item-total">
          <div>{filteredData.length} ITEMS</div>
          <div
            className="hide"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            {filterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </div>
        </div>
        <div>
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className="item-section">
        {filterVisible && (
          <div className="left-section">
            <div className="custom">
              <input type="checkbox" className="check-box" />
              <label>CUSTOMIZABLE</label>
            </div>

            {renderDropdown("IDEAL FOR", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("occasion", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("work", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("fabric", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("segment", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("suitable for", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("raw materials", ["MEN", "WOMEN", "BABY & KIDS"])}
            {renderDropdown("Pattern", ["MEN", "WOMEN", "BABY & KIDS"])}
          </div>
        )}

        <div className={`right-section ${filterVisible ? "" : "full-width"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            filteredData.map((item) => (
              <div key={item.id} className="card">
                <Card item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
