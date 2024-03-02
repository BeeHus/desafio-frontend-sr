const { faker } = require('@faker-js/faker');

const securityClasses = [
  'Renda Fixa',
  'Multimercado',
  'Renda Variável',
  'Infraestrutura',
  'Imobiliário',
  'Alternativos',
];

const securityCategories = new Map([
  ['Renda Fixa', ['Pós Fixado', 'Inflação', 'Pré Fixado', 'Crédito Privado']],
  ['Multimercado', ['Multimercado']],
  ['Renda Variável', ['Long Only', 'Long Bias', 'Ações / ETF']],
  ['Infraestrutura', ['Infraestrutura']],
  ['Imobiliário', ['Imobiliário']],
  ['Alternativos', ['Commodities', 'Imobiliário', 'Private Equity', 'Venture Capital', 'Crédito Estruturado']],
]);
/**
 * @typedef {object} Security
 * @property {string} class Classe do ativo
 * @property {string} category Categoria do ativo
 * @property {string} security Nome do ativo
 * @property {number} netValue Valor liquido do ativo na data
 */

/**
 * @typedef {object} Position
 * @property {string} clientId
 * @property {string} companyId
 * @property {Date} date
 * @property {Security[]} securities
 */

/**
 * Randomiza uma posição de um cliente.
 * @param {object} params
 * @param {string}  params.clientId ID do cliente cuja posição deve ser gerada
 * @param {string}  params.companyId ID da empresa à qual está vinculada o cliente
 * @param {Date} params.date Data da posição
 * @returns {Position}
 */
const randomizePosition = ({ clientId, companyId, date }) => {
  const position = {
    clientId,
    companyId,
    date,
    securities: [],
  };

  const maxSecurities = faker.helpers.rangeToNumber({ min: 50, max: 500 });

  for (let i = 0; i < maxSecurities; i++) {
    const securityClass = faker.helpers.arrayElement(securityClasses);
    const securityCategory = faker.helpers.arrayElement(securityCategories.get(securityClass));

    position.securities.push({
      class: securityClass,
      category: securityCategory,
      security: faker.helpers.fromRegExp(/[A-Z]{4}[1-9]{1,2}/),
      netValue: faker.number.float({ min: 100000, max: 10000000, fractionDigits: 2 }),
    });
  }

  return position;
};

console.log(
  JSON.stringify(
    randomizePosition({
      clientId: '3',
      companyId: '6de54178-883d-4861-8d89-14f3a556fb0a',
      date: '2023-07-02T00:00:00.000Z',
    }),
    null,
    2
  )
);
