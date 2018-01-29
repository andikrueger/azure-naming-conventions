import { NamingConventionRule, NamingConventionResult } from '../../index';

/**
 * Resultset of Naming Conventions
 */
export class NamingConventionResultSet {
    private _isValid: boolean = true;
    private _resultSet: NamingConventionResult[] = new Array<NamingConventionResult>();

    public get isValid(): boolean {
        return this._isValid;
    }

    public get resultSet(): NamingConventionResult[] {
        return this._resultSet;
    }

    public toString(): string {
        let retVal: string = 'Failing rules: ';
        this._resultSet.forEach(element => {
            if (element.isValid === false) {
                retVal += NamingConventionRule[element.rule] + ' ';
            }
        });
        return retVal;
    }

    /**
     * Add a new result to the collection of results
     * @param {NamingConventionResultSet} resultSet - Resultset to add to the collection
     */
    public addResult(resultSet: NamingConventionResult): void {
        this._isValid = this._isValid && resultSet.isValid;
        this._resultSet.push(resultSet);
    }
}
