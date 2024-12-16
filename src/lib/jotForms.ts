const getUserForms = async (title: string) => {
  const result = await fetch(
    `https://api.jotform.com/user/forms?apiKey=e7e4d7c1f4b9cdc6b68d6c098c47644d&limit=1000`,
  );
  const data = await result.json();
  const form = data.content.find((e: Record<string, any>) => e.title === title);
  return form?.id;
};

export const getForm = async (title: string) => {
  const formId = await getUserForms(title);
  const result = await fetch(
    `https://api.jotform.com/form/${formId}?apiKey=e7e4d7c1f4b9cdc6b68d6c098c47644d`,
  );
  const data = await result.json();
  const url = data.content.url;
  return url;
};
