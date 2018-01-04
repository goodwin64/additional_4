const assert = require('assert');
const multiply = require('./src/index.js');
const { multiplyByDigit } = require('./src/helpers.js');

it('should multiply 2 numbers and return product 50', () => {
  assert.strictEqual(multiply('5', '10'), '50');
});

it('should multiply 2 numbers and return product 100000000', () => {
  assert.strictEqual(multiply('10000', '10000'), '100000000');
});

it('should multiply 2 numbers and return product 10000000000000000', () => {
  assert.strictEqual(multiply('100000000', '100000000'), '10000000000000000');
});

it('should multiply 2 numbers and return product 19240045408977038918943543720037256', () => {
  assert.strictEqual(multiply('329568934658432659586', '58379426534596'), '19240045408977038918943543720037256');
});

it('should multiply 2 numbers and return product 2564409095663498076999916945221826386307700', () => {
  assert.strictEqual(multiply('439265893465876578346584325', '5837942653434596'), '2564409095663498076999916945221826386307700');
});

it('should multiply 2 numbers and return product 2564224144126429540528307700', () => {
  assert.strictEqual(multiply('43923423584325', '58379423434596'), '2564224144126429540528307700');
});

it('should multiply 2 numbers and return product 2469135802469135799975308641975308642', () => {
  assert.strictEqual(multiply('111111111111111111', '22222222222222222222'), '2469135802469135799975308641975308642');
});

it('should multiply 2 numbers and return product 7407407407407407407325925925925925925926', () => {
  assert.strictEqual(multiply('333333333333333333333', '22222222222222222222'), '7407407407407407407325925925925925925926');
});

it('should multiply 2 numbers and return product 1481481481481481481479851851851851851851852', () => {
  assert.strictEqual(multiply('333333333333333333333', '4444444444444444444444'), '1481481481481481481479851851851851851851852');
});

it('should multiply 2 numbers and return product 25101298695270351557618164676932440113017170708232756964483490927393235787759886048', () => {
  assert.strictEqual(multiply('760954769047694567984358934658793465783', '32986584375683268326478346587346582436583456'), '25101298695270351557618164676932440113017170708232756964483490927393235787759886048');
});

it('should multiply 2 numbers and return product 2510129869527035155770030793336098200454537680672361781583599886048', () => {
  assert.strictEqual(multiply('76095476904769456798433465783', '32986584375683268326587346582436583456'), '2510129869527035155770030793336098200454537680672361781583599886048');
});

it('should multiply 2 numbers and return product 25101298704076941625658709032491666625307402836003957095862694716446915036817179535192741780138433753007763287276821727100657519886048', () => {
  assert.strictEqual(multiply('76095476904769456798433934759347589346587346578342658346285963489253465783', '329865843872563478658342756873375683268326587346582436583456'), '25101298704076941625658709032491666625307402836003957095862694716446915036817179535192741780138433753007763287276821727100657519886048');
});

it('should multiply 2 numbers and return product 4061432330810867395226739184161095916771242700634858259330573696975315348837952898227720224627622563294226313567463000537341441969561807100657519886048', () => {
  assert.strictEqual(multiply('12312376095476904769456798433934759347589346587346578342658346285963489253465783', '329865843872563478658342756873375683268326583435452342347346582436583456'), '4061432330810867395226739184161095916771242700634858259330573696975315348837952898227720224627622563294226313567463000537341441969561807100657519886048');
});

it('should multiply 2 numbers and return product 8039478803562301312945731536636937786946145622033671701077185622708260023194452833705836798934954757818601850586548267694783898227720224627622563294226313567463000537341441969561807100657519886048', () => {
  assert.strictEqual(multiply('3467598346538256487395689342653498563412312376095476904769456798433934759347589346587346578342658346285963489253465783', '2318457329865843872563478658342756873375683268326583435452342347346582436583456'), '8039478803562301312945731536636937786946145622033671701077185622708260023194452833705836798934954757818601850586548267694783898227720224627622563294226313567463000537341441969561807100657519886048');
});

it('should multiply 2 numbers and return product 108', () => {
  assert.strictEqual(
      multiplyByDigit('12', '9'),
      '108'
  );
});

it('should multiply 2 numbers and return product 891', () => {
  assert.strictEqual(
      multiplyByDigit('99', '9'),
      '891'
  );
});

it('should multiply 2 numbers corner case: 0 * 0', () => {
  assert.strictEqual(
      multiplyByDigit('0', '0'),
      '0'
  );
});

it('should multiply 2 numbers corner case: 1 * 1', () => {
  assert.strictEqual(
      multiplyByDigit('1', '1'),
      '1'
  );
});

it('should multiply 2 numbers corner case: 10 * 0', () => {
  assert.strictEqual(
      multiplyByDigit('10', '0'),
      '0'
  );
});
