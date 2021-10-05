import APIGeneral from './baseService'; 

export const getUserList = async () => {
  try {
    const r = await APIGeneral.get('/user');
    return r;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export const registerUser = async (email, phone, cpf, password) => {
  try {
    const r = await APIGeneral.post('/user/create', {
      email,
      phone,
      cpf,
      password
    });
    return r;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const loginUser = async (email, password) => {
  try {
    const r = await APIGeneral.post('/user/login', {
      email,
      password
    });
    return r;
  } catch (err) {
    console.error(err);
    return err;
  };
};


// Loja

export const registerStore = async (storeName, storeDescription, userId) => {
  try {
    const r = await APIGeneral.post("/store/create", {
      storeName,
      storeDescription,
      userId,
    });
    console.log(r);
    return r;
  } catch (err) {
    console.error(err);
    return err
  };
};