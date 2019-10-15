export const presets = {
  name: {
    min: 1,
    max: 40,
    validChars: ["letters", "., "],
    spellcheck: false,
  },
  username: {
    min: 3,
    max: 40,
    validChars: ["letters", "numbers", "_-"]
  },
  phone: {
    min: 10,
    max: 10,
    validChars: ["numbers"],
  },
  password: {
    mustContain: {
      digits: false,
      lowercase: false,
      uppercase: false,
      symbols: false,
    },
    min: 8,
    max: 100,
  },
  email: {
    regexp: "^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$",
    label: 'Email Address',
  },
  ein: {
    regexp: "^[1-9]\\d?-\\d{7}$",
    label: "Employer Identification number"
  }
}