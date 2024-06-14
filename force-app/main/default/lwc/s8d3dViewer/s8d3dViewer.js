import { LightningElement, api } from 'lwc';

export default class S8d3dViewer extends LightningElement {
    @api title;
    @api source;
    @api text;
    @api icon;
    @api styles;
    @api classes;
    @api card;
}