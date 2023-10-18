type TLoginForOwnerBody = {
  phone: string;
  secret: string;
};

type TLoginForOwnerResponse = {
  phoneNumber: string;
  password: string;
};

type TSendOtpForOwnerBody = {
  userId: string;
  phone: string;
};

type TSendOtpForOwnerResponse = {
  $id: string;
  $createdAt: string;
  userId: string;
  secret: string;
  expire: string;
};

type TAuthData = {
  userId: string;
  phone: string;
};
