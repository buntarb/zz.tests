/**
 * @fileoverview Provide zz.tests.models.SimplestDatarow and zz.tests.models.SimplestDataset class.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.tests.models.SimplestDatarow' );
goog.provide( 'zz.tests.models.SimplestDataset' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );

/**
 * @param {!zz.models.Dataset} dataset
 * @param {?Array.<boolean, number, string>} opt_data
 * @extends {zz.models.Datarow}
 * @constructor
 */
zz.tests.models.SimplestDatarow = function( dataset, opt_data ){

    /**
     * @type {string}
     */
    this.str = undefined;

    /**
     * @type {boolean}
     */
    this.bool = undefined;

    /**
     * @type {number}
     */
    this.nmbr = undefined;

    /**
     * Call parent constructor.
     */
    goog.base( this, dataset, opt_data );
};
goog.inherits( zz.tests.models.SimplestDatarow, zz.models.Datarow );

/**
 * @param {goog.event.EventTarget=} opt_parent
 * @param {Array.<Array>=} opt_data
 * @extends {zz.models.Dataset}
 * @constructor
 */
zz.tests.models.SimplestDataset = function( opt_parent, opt_data ){

    zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( zz.tests.models.SimplestDataset, zz.models.Dataset );

/**
 * Current dataset row type.
 * @constructor
 * @overwrite
 * @type {zz.tests.models.SimplestDatarow}
 */
zz.tests.models.SimplestDataset.prototype.DatarowConstructor = zz.tests.models.SimplestDatarow;

/**
 * Return schema object.
 * @override
 * @returns {Object}
 */
zz.tests.models.SimplestDataset.prototype.getDatarowSchema = function( ){

    return {

        str: {

            index: 0,
            type: zz.models.enums.FieldType.STRING,
            required: false
        },
        bool: {

            index: 1,
            type: zz.models.enums.FieldType.BOOLEAN,
            required: false
        },
        nmbr: {

            index: 2,
            type: zz.models.enums.FieldType.NUMBER,
            required: false
        }
    };
};