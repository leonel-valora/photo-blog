export const loadData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const loadDataById = async (url, id) => {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    return data;
}

export const loadMultipleData = (id) => {
    Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
        fetch(`https://jsonplaceholder.typicode.com/comments`),
      ]).then(([post, comments])=> {
          console.log(post, comments);
      })
}

export const loadFilterData = async (url, filter, id) => {
    const data = await loadData(url);
    const filterData = data.filter((obj) => obj[filter] == id);
    console.log(filterData);
    return filterData;
}
