import { NamingConventionRule } from '../NamingConventionRule/NamingConventionRule';
import { NamingConventionResultSet } from '../NamingConventionResultSet/NamingConventionResultSet';
import { NamingConventionResult } from '../NamingConventionResult/NamingConventionResult';

/**
 * Class to provide methods to check compliance of an Azure name to its naming convention
 */
export class NamingConvention {
    private name: string;
    private ruleSet: NamingConventionRule;

    constructor(name: string, ruleSet: NamingConventionRule) {
        this.name = name;
        this.ruleSet = ruleSet;
    }

    /**
     * Validates the current instance of a given name
     */
    public validate(): NamingConventionResultSet {
        let result: NamingConventionResultSet = new NamingConventionResultSet();

        result.addResult(this.validateBestPractices());

        let pattern: string = '';

        switch (this.ruleSet) {
            case NamingConventionRule.AvailabilitySet:
                pattern = '^[a-zA-Z0-9\-_]{1,80}$';
                break;
            case NamingConventionRule.AzureApplicationGateway:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.BlobName:
                pattern = '^(?=.{1,1024}$)(^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$)';
                break;
            case NamingConventionRule.ContainerName:
                pattern = '^[a-z0-9\-]{3,63}$';
                break;
            case NamingConventionRule.DataLakeStore:
                pattern = '^[a-z0-9]{3,24}$';
                break;
            case NamingConventionRule.FileName:
                pattern = '^[a-z0-9]{3,63}$';
                break;
            case NamingConventionRule.FunctionApp:
                pattern = '^[a-zA-Z0-9\-]{1,60}$';
                break;
            case NamingConventionRule.LoadBalancedRulesConfig:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.LoadBalancer:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.NetworkInterface:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.NetworkSecurityGroup:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.NetworkSecurityGroupRule:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.PublicIPAddress:
                pattern = '(^[a-zA-Z0-9\-\._]{1,80})$';
                break;
            case NamingConventionRule.QueueName:
                pattern = '^[a-z0-9\-]{3,63}$';
                break;
            case NamingConventionRule.ResourceGroup:
                pattern = '(^[a-zA-Z0-9\-\.\(\)_]{1,64}[^.])$';
                break;
            case NamingConventionRule.StorageAccountNameData:
                pattern = '^[a-z0-9]{3,24}$';
                break;
            case NamingConventionRule.StorageAccountNameDisks:
                pattern = '^[a-z0-9]{3,24}$';
                break;
            case NamingConventionRule.Subnet:
                pattern = '(^[a-zA-Z0-9\-\._]{2,80})$';
                break;
            case NamingConventionRule.TableName:
                pattern = '^[a-zA-Z0-9]{3,63}$';
                break;
            case NamingConventionRule.TrafficManagerProfile:
                pattern = '(^[a-zA-Z0-9\-\.]{1,63})$';
                break;
            case NamingConventionRule.VirtualMachineLinux:
                pattern = '^[a-zA-Z0-9\-_]{1,64}$';
                break;
            case NamingConventionRule.VirtualMachineWindows:
                pattern = '^[a-zA-Z0-9\-_]{1,15}$';
                break;
            case NamingConventionRule.VirtualNetworkVNet:
                pattern = '(^[a-zA-Z0-9\-\._]{2,64})$';
                break;
            default:
                break;
        }
        if (pattern !== '') {
            result.addResult(this.validatePattern(pattern));
        }
        return result;
    }

    /**
     * Validates for compliance with best practices
     */
    private validateBestPractices(): NamingConventionResult {
        let pattern: string = '(^(?!((^_)|(^-))).*)((?=([_$]|[-$]))|[^-^_])$';
        let rule: NamingConventionRule = NamingConventionRule.BestPractices;
        return this.validatePattern(pattern, rule);
    }

    /**
     * validates the name against a given pattern and creates a net instance of NamingConventionResultSet
     * @param {string} pattern RegEx Pattern
     * @param {NamingConventionRule} rule Rule to set
     */
    private validatePattern(pattern: string, rule?: NamingConventionRule): NamingConventionResult {
        let regex: RegExp = new RegExp(pattern, 'g');
        let result: boolean = regex.test(this.name);
        return new NamingConventionResult(result, rule === undefined ? this.ruleSet : rule);
    }
}
