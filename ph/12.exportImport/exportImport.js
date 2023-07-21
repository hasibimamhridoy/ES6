

/**
 * Direct name export
 * Directy name and person has export form another file
 */
import {number,person} from "../11.destructure/destructure.js"

/**
 * Import all *
 */
import * as imArAndObj from "../11.destructure/destructure.js"

/**
 * Change name as name
 */
import {number as numArr , person as perObj} from "../11.destructure/destructure.js"


/**
 * Import from default
 */
import cMan1 from "../11.destructure/destructure.js"


/**
 * Import from default and name both one time
 */
import cMan2 , {number as Num} from "../11.destructure/destructure.js"




console.log(cMan2,Num);

