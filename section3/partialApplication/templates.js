const courses = [
  {
    title: "Javascript",
    author: "Richard",
    sections: 6,
  },
  {
    title: "C#",
    author: "Richard",
    sections: 3,
  },
  {
    title: "Functional programming",
    author: "Richard",
    sections: 5,
  },
];

const getTemplate = ({ courses }) => {
  const headerTemplate = `
  <tr>
    <th>Title</th>  
    <th>Author</th>  
    <th>Sections</th>  
  </tr>
`;

  const rowTemplate = courses
    .map(
      (course) => `
      <tr>
        <td>${course.title}</td>
        <td>${course.author}</td>
        <td>${course.sections}</td>
      </tr>
    `
    )
    .join("");

  return `
  <table>
    <thead>${headerTemplate}</thead>
    <tbody>${rowTemplate}</tbody>
  </table>
`;
};

const insertTemplate = (domNode, getTemplate, templateData) => {
  domNode.innerHTML = getTemplate(templateData);
};

document.body.innerHTML = tableTemplate;
