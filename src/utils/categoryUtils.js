  export const formatGender = (gender) => {
    if (gender === "k") return "kadin";
    if (gender === "e") return "erkek";
    return "";
  };

  export const formatCategoryName = (title) => {
    return String(title || "")
      .toLowerCase()
      .replaceAll("ı", "i")
      .replaceAll("ğ", "g")
      .replaceAll("ü", "u")
      .replaceAll("ş", "s")
      .replaceAll("ö", "o")
      .replaceAll("ç", "c")
      .replaceAll(" ", "-");
  };

  export const createCategoryPath = (category) => {
    const gender = formatGender(category.gender);
    const categoryName = formatCategoryName(category.title);
    const categoryId = category.id;

    return `/shop/${gender}/${categoryName}/${categoryId}`;
  };