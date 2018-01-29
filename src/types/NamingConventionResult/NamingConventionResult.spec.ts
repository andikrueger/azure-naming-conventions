// tslint:disable-next-line:no-unused-expression

import 'mocha';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as chai from 'chai';
import { expect } from 'chai';
import { NamingConventionRule, NamingConventionResult, NamingConventionResultSet } from '../../index';


chai.use(sinonChai);

describe('NamingConventionResult', () => {
    let namingConventionResult: NamingConventionResult;
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        namingConventionResult = new NamingConventionResult(true, NamingConventionRule.BestPractices);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('It should create a new instance of the object', () => {
        expect(namingConventionResult).to.be.an.instanceof(NamingConventionResult);
        expect(namingConventionResult.rule).to.be.eq(NamingConventionRule.BestPractices);
    });
});
