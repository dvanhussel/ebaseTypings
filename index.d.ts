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
		    static executeFunctionAsynchronously(successCallBack:any, failureCallBack:any, functionName:string, parameter:any[], autorefresh?:boolean, fullsubmit?:boolean, componentPrefix?:string): void;
		
		
			/**
		     *  registerEventHandler
		     */
		    static registerEventHandler(jQueryElement:any, eventName:string, eventHandler:any): any;

			/**
			 * getFieldValue
			 * 
			 * @param string fieldName 
			 * @returns any value 
			 */
			static getFieldValue(fieldName:string):any;

			/**
			 * setFieldValue
			 * 
			 * @param string fieldName 
			 * @param any value,
			 * @param boolean autorefresh [Optional]
			 * @param object failureCallback [Optional]
			 */
			static setFieldValue(fieldName:string, value:any,autorefresh?:boolean, failureCallBack?:object):boolean;

		}
