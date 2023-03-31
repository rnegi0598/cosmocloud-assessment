export const interfaceData = {
  id: "-1",
  field: "root",
  type: "object",
  required: true,
  children: [
    {
      id: "0",
      field: "person",
      type: "object",
      required: true,
      children: [
        {
          id: "00",
          field: "name",
          type: "object",
          required: true,
          children: [
            {
              id: "000",
              field: "firstName",
              type: "string",
              required: true,
              children: null,
            },
            {
              id: "001",
              field: "lasttName",
              type: "string",
              required: false,
              children: null,
            },
          ],
        },
        {
          id: "01",
          field: "age",
          type: "integer",
          required: false,
          children: null,
        },
      ],
    },
    {
      id: "1",
      field: "order",
      type: "string",
      required: false,
      children: null,
    },
    {
      id: "2",
      field: "class",
      type: "boolean",
      required: true,
      children: null,
    },
  ],
};
