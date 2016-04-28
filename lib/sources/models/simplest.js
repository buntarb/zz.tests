/**
 * @fileoverview Provide zz.tests.models.simplest.Datarow and zz.tests.models.simplest.Dataset class.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Alexander Popkov)
 */

goog.provide( 'zz.tests.models.simplest.Datarow' );
goog.provide( 'zz.tests.models.simplest.Dataset' );

goog.require( 'zz.models.Datarow' );
goog.require( 'zz.models.Dataset' );
goog.require( 'zz.models.enums.FieldType' );

/**
 * @param {!zz.models.Dataset} dataset
 * @param {?Array.<boolean, number, string>} opt_data
 * @extends {zz.models.Datarow}
 * @constructor
 */
zz.tests.models.simplest.Datarow = function( dataset, opt_data ){

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
goog.inherits( zz.tests.models.simplest.Datarow, zz.models.Datarow );

/**
 * @param {goog.event.EventTarget=} opt_parent
 * @param {Array.<Array>=} opt_data
 * @extends {zz.models.Dataset}
 * @constructor
 */
zz.tests.models.simplest.Dataset = function( opt_parent, opt_data ){

    zz.models.Dataset.call( this, opt_parent, opt_data );
};
goog.inherits( zz.tests.models.simplest.Dataset, zz.models.Dataset );

/**
 * Current dataset row type.
 * @constructor
 * @overwrite
 * @type {zz.tests.models.simplest.Datarow}
 */
zz.tests.models.simplest.Dataset.prototype.DatarowConstructor = zz.tests.models.simplest.Datarow;

/**
 * Return schema object.
 * @override
 * @returns {Object}
 */
zz.tests.models.simplest.Dataset.prototype.getDatarowSchema = function( ){

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