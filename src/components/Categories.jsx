import React from "react";

const Category = ({ image, title }) => {
  return (
    <div className="text-center">
      <img src={image} alt="image" className="rounded-md w-[120px]" />
      <h2 className="font-semibold">{title}</h2>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex bg-white rounded-md gap-3">
      <Category
        image={
          "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/image_4.png"
        }
        title={"Phones & Tablets"}
      />
      <Category
        image={
          "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/electronics.png"
        }
        title={"TV & Audio"}
      />
      <Category
        image={
          "https://ng.jumia.is/cms/0-0-black-friday/2024/Thumbnails/appliances.png"
        }
        title={"Appliances"}
      />
    </div>
  );
};

export default Categories;