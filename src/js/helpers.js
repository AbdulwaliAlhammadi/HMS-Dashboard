// JsDocs
/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element, parentElement = document) =>
  parentElement.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements, parentElement = document) =>
  parentElement.querySelectorAll(elements);

const setStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(
        key,
        JSON.stringify({
          data: value,
        })
      );
      resolve("Ok");
    } catch {
      reject("Failed");
    }
  });
};

const getStorage = (key, initalValue = null) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data).data;
  return initalValue;
};

export {
  el,
  els,
  setStorage,
  getStorage
};