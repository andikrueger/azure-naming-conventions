// tslint:disable-next-line:no-unused-expression

import 'mocha';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as chai from 'chai';
import { expect } from 'chai';
import { NamingConventionRule, NamingConventionResult, NamingConventionResultSet } from '../../index';


chai.use(sinonChai);

describe('NamingConventionResultSet', () => {
    let namingConventionResultSet: NamingConventionResultSet;
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        namingConventionResultSet = new NamingConventionResultSet();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('It should create a new instance of the object', () => {
        expect(namingConventionResultSet).to.be.an.instanceof(NamingConventionResultSet);
    });

    it('It should return the failing rules', () => {
        let failingResult: NamingConventionResult = new NamingConventionResult(false, NamingConventionRule.BestPractices);
        namingConventionResultSet.addResult(failingResult);

        let fineResult: NamingConventionResult = new NamingConventionResult(true, NamingConventionRule.AvailabilitySet);
        namingConventionResultSet.addResult(fineResult);

        let resultString: string = namingConventionResultSet.toString();
        expect(resultString).to.be.equals('BestPractices');

        let failingResult2: NamingConventionResult = new NamingConventionResult(false, NamingConventionRule.AzureApplicationGateway);
        namingConventionResultSet.addResult(failingResult2);

        resultString = namingConventionResultSet.toString();
        expect(resultString).to.be.equals('BestPractices, AzureApplicationGateway');
    });

    it('It should return the result set', () => {
        let failingResult: NamingConventionResult = new NamingConventionResult(false, NamingConventionRule.BestPractices);
        namingConventionResultSet.addResult(failingResult);
        let resultSet: NamingConventionResult[] = namingConventionResultSet.resultSet;
        expect(resultSet).to.be.an.instanceOf(Array);
    });
});
