		// Type definitions for Ebase Xi Client API v 5.2.1
		// Project: Ebase Xi
		// Definitions by: David van Hussel <https://www.haarlem.nl/>
		
		declare class $eb {
		
		    /**
		     * executeFunction
		     */
		    
		    static executeFunction(functionName: string, parameter?: any[], autorefresh?: boolean, fullsubmit?: boolean, failureCallBack?: any): any;
		
		    /**
		     *  executeFunctionAsynchronously
		     */
		    static executeFunctionAsynchronously(successCallBack:any, failureCallBack:any, functionName:string, parameter:any[], autorefresh?:boolean, fullsubmit?:boolean): void;
		
			/**
			 * getFieldValue
			 * 
			 * @param string fieldName 
			 * @returns any value 
			 */
			static getFieldValue(fieldName:string):any;
		}
