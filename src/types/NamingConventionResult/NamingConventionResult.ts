import { NamingConventionRule } from '../../index';

/**
 * Class to represent the detailed result of the naming convention test
 */
export class NamingConventionResult {
    private _isValid: boolean;
    private _rule: NamingConventionRule;

    public get isValid(): boolean {
        return this._isValid;
    }
    public get rule(): NamingConventionRule {
        return this._rule;
    }

    constructor(result: boolean, rule: NamingConventionRule) {
        this._isValid = result;
        this._rule = rule;
    }
}
