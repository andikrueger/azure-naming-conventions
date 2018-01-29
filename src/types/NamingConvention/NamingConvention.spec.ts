// tslint:disable-next-line:no-unused-expression

import 'mocha';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
import * as chai from 'chai';
import { expect } from 'chai';
import { NamingConvention, NamingConventionResult, NamingConventionResultSet, NamingConventionRule } from '../../index';

chai.use(sinonChai);

describe('NamingConvention', () => {
    let naming: NamingConvention;
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        naming = new NamingConvention('test', NamingConventionRule.BestPractices);
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('It should create a new instance of the object', () => {
        chai.expect(naming).to.be.an.instanceof(NamingConvention);
    });

    it('It should return a NamingConventionResultSet when validate() is called', () => {
        let spy: sinon.SinonSpy = sandbox.spy(NamingConvention.prototype, 'validate');
        let result: NamingConventionResultSet = naming.validate();
        expect(result).to.be.an.instanceOf(NamingConventionResultSet);
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid).to.be.true;
        expect(result.resultSet.length).to.be.eq(1);
        // tslint:disable-next-line:no-unused-expression
        expect(spy).to.have.been.called.calledOnce;
    });

    it('It should validate "NamingConventionRule.BestPractices"', () => {
        let result: NamingConventionResultSet;

        let test: string = 'a'; // true
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        expect(result.resultSet.length).to.be.eq(1);
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.true;

        test = '_'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = '-'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = 'test-'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = 'test_'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = '-test_'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = '_test-'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = '_test_'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;

        test = '-test-'; // false
        naming = new NamingConvention(test, NamingConventionRule.BestPractices);
        result = naming.validate();
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid, test).to.be.false;
    });

    it('It should validate "NamingConventionRule.AvailabilitySet"', () => {
        let spy: sinon.SinonSpy = sandbox.spy(NamingConvention.prototype, 'validate');

        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.AvailabilitySet);
        let result: NamingConventionResultSet = naming.validate();
        expect(result).to.be.an.instanceOf(NamingConventionResultSet);
        // tslint:disable-next-line:no-unused-expression
        expect(result.isValid).to.be.true;
        expect(result.resultSet.length).to.be.eq(2);
        // tslint:disable-next-line:no-unused-expression
        expect(spy).to.have.been.called.callCount(1);
    });

    it('It should validate "NamingConventionRule.AzureApplicationGateway"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.AzureApplicationGateway);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.BlobName"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.BlobName);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.ContainerName"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.ContainerName);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.DataLakeStore"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.DataLakeStore);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.FileName"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.FileName);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.FunctionApp"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.FunctionApp);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.LoadBalancedRulesConfig"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.LoadBalancedRulesConfig);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.LoadBalancer"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.LoadBalancer);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.NetworkInterface"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.NetworkInterface);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.NetworkSecurityGroup"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.NetworkSecurityGroup);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.NetworkSecurityGroupRule"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.NetworkSecurityGroupRule);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.PublicIPAddress"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.PublicIPAddress);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.QueueName"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.QueueName);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.ResourceGroup"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.ResourceGroup);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.StorageAccountNameData"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.StorageAccountNameData);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.StorageAccountNameDisks"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.StorageAccountNameDisks);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.Subnet"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.Subnet);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.TableName"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.TableName);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.TrafficManagerProfile"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.TrafficManagerProfile);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.VirtualMachineLinux"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.VirtualMachineLinux);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.VirtualMachineWindows"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.VirtualMachineWindows);
        let result: NamingConventionResultSet = naming.validate();
    });

    it('It should validate "NamingConventionRule.VirtualNetworkVNet"', () => {
        let test: string = 'test';
        naming = new NamingConvention(test, NamingConventionRule.VirtualNetworkVNet);
        let result: NamingConventionResultSet = naming.validate();
    });
});
