import * as R from 'ramda';
import request from 'superagent';


const categoriesUrl = 'http://www.mocky.io/v2/5a1bc7f82e00001b163c14ec';
const phonesUrl = 'http://www.mocky.io/v2/5a1bc4ef2e000055163c14de';

export const fetchPhones = async () => {
  const { body } = await request.get(phonesUrl);
  return body.phones;
};

export const loadMorePhones = async ({offset}) => {
  const { body } = await request.get(phonesUrl);
  return body.phones;
};

export const fetchPhoneById = async (id) => {
  const { body } = await request.get(phonesUrl);
  const phones = body.phones;

  return R.find(R.propEq('id', id), phones);
};

export const fetchCategories = async () => {
  const { body } = await request.get(categoriesUrl);
  return body.categories;
};