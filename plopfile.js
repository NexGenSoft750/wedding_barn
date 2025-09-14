const path = require('path');

module.exports = function (plop) {
  plop.setHelper('dotclass', (str) => `{styles.${str}}`);

  plop.setGenerator('component', {
    description: 'Generate a React component with SCSS module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (use path if needed, e.g. subfolder/PriceItem):',
      },
    ],
    actions: (data) => {
      const parsed = path.parse(data.name);

      // Extract folder & file name
      const folder = parsed.dir;         // e.g. "subfolder"
      const baseName = parsed.name;      // e.g. "PriceItem"

      // Compute target folder
      const targetFolder = folder
        ? `src/components/${folder}`
        : 'src/components';

      // Overwrite name so pascalCase etc. works correctly
      data.name = baseName;

      return [
        {
          type: 'add',
          path: `${targetFolder}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/Component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${targetFolder}/{{pascalCase name}}.module.scss`,
          templateFile: 'plop-templates/Component.module.scss.hbs',
        },
      ];
    },
  });
};
