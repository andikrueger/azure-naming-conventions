import { NamingConventionRule } from '../NamingConventionRule/NamingConventionRule';

/**
 * Class to represent the detailed result of the naming convention test
 */
export class NamingConventionResult {
    private _isValid: boolean;
    private _rule: NamingConventionRule;

    public isValid(): boolean {
        return this._isValid;
    }
    public rule(): NamingConventionRule {
        return this._rule;
    }

    constructor(result: boolean, rule: NamingConventionRule) {
        this._isValid = result;
        this._rule = rule;
    }
}
