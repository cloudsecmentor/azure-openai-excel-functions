// Copy Excel constants from DevTools using "copy object".

global.fetch = () => {
  throw new Error('fetch() must be mocked');
};

global.CustomFunctions = {
  Error: class CustomFunctionsError {
    constructor(code, message) {
      Object.assign(this, { code, message });
    }
  },
  ErrorCode: {
    invalidValue: '#VALUE!',
    notAvailable: '#N/A',
    divisionByZero: '#DIV/0!',
    invalidNumber: '#NUM!',
    nullReference: '#NULL!',
    invalidName: '#NAME?',
    invalidReference: '#REF!',
  },
  associate() {},
};

global.Excel = {
  CellValueType: {
    array: 'Array',
    boolean: 'Boolean',
    double: 'Double',
    entity: 'Entity',
    empty: 'Empty',
    error: 'Error',
    externalCodeServiceObject: 'ExternalCodeServiceObject',
    formattedNumber: 'FormattedNumber',
    linkedEntity: 'LinkedEntity',
    localImage: 'LocalImage',
    reference: 'Reference',
    string: 'String',
    notAvailable: 'NotAvailable',
    webImage: 'WebImage',
  },

  RangeValueType: {
    unknown: 'Unknown',
    empty: 'Empty',
    string: 'String',
    integer: 'Integer',
    double: 'Double',
    boolean: 'Boolean',
    error: 'Error',
    richValue: 'RichValue',
  },
};
