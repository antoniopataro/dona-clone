import React, { useContext } from "react";

import { Context } from "../../context/ContextProvider";

import { CategoryProps } from "../Category";

import checkIcon from "../../assets/checkIcon.svg";

import donaBlue from "../../assets/donaBlue.svg";
import donaPurple from "../../assets/donaPurple.svg";
import donaOrange from "../../assets/donaOrange.svg";
import donaYellow from "../../assets/donaYellow.svg";
import donaRed from "../../assets/donaRed.svg";
import donaGreen from "../../assets/donaGreen.svg";
import donaGray from "../../assets/donaGray.svg";

import SelectStyles from "./styles";

interface SelectProps {
  isSelectingCategory: boolean;
  category: CategoryProps;
  setCategory: React.Dispatch<React.SetStateAction<CategoryProps>>;
}

function Select({ isSelectingCategory, category, setCategory }: SelectProps) {
  const { categories } = useContext(Context);

  const handleIcon = (slug: string) => {
    switch (slug) {
      case "/":
        return donaBlue;
      case "/personal":
        return donaPurple;
      case "/work":
        return donaOrange;
      case "/studies":
        return donaYellow;
      case "/gym":
        return donaRed;
      case "/finances":
        return donaGreen;
      default:
        return donaGray;
    }
  };

  return (
    <SelectStyles isSelectingCategory={isSelectingCategory}>
      {isSelectingCategory && (
        <ul>
          {categories.map((item) => (
            <li key={item.slug} onClick={() => setCategory(item)}>
              <img src={handleIcon(item.slug)} alt="" width={15} />
              <h4>{item.title}</h4>
              {category.slug === item.slug && <img src={checkIcon} alt="Chosen Category" width={10} id="checkmark" />}
            </li>
          ))}
        </ul>
      )}
    </SelectStyles>
  );
}

export default Select;
