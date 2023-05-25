export const sex: sexDictProps = {
  0: { value: 0, label: "여성" },
  1: { value: 1, label: "남성" },
};

export function isFemale(sex_value: number) {
  if (sex[sex_value].label === "여성") {
    return 1;
  } else {
    return 0;
  }
}

export function isMale(sex_value: number) {
  if (sex[sex_value].label === "남성") {
    return 1;
  } else {
    return 0;
  }
}

interface sexProps {
  value: number;
  label: string;
}

interface sexDictProps {
  [index: number]: sexProps;
}
