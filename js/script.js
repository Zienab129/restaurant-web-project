// Firefox does not support :has() yet, so we have to set the --nth-siblings count through JS
const supportsComplexHas = CSS.supports("selector(:has(>*))");
if (!supportsComplexHas) {
  const updateChildCount = ($parent) => {
    $parent.querySelectorAll(":scope > *").forEach(($child) => {
      $child.style.setProperty("--nth-siblings", $parent.childElementCount - 1);
    });
  };
  const updateChildCountAll = () => {
    document.querySelectorAll("[data-countchildren]").forEach(($parent) => {
      updateChildCount($parent);
    });
  };
  updateChildCountAll();
}