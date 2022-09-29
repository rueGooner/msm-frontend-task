export async function getData(url) {
  let reponse = await fetch(url);

  return await reponse.json();
}

export function currenciesToArray(currencies = {}) {
  return Object.entries(currencies).map(([key, data]) => {
    data.name = key;
    return data;
  });
}
