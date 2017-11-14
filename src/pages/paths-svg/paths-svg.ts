import { Component }                from '@angular/core';

import * as d3                              from 'd3-selection';
import * as d3Shape                         from 'd3-shape';
import { CurveBundleFactory, CurveFactory } from 'd3-shape';

@Component({
    selector: 'page-paths-svg',
    templateUrl: 'paths-svg.html',
})

export class PathsSvgPage {
    
    interpolations:Array<{ name:string, value:CurveFactory|CurveBundleFactory }> = [
        { name:'basis',             value: d3Shape.curveBasis },
        { name:'basisClosed',       value: d3Shape.curveBasisClosed },
        { name:'basisOpen',         value: d3Shape.curveBasisOpen },
        { name:'bundle',            value: d3Shape.curveBundle },
        { name:'cardinal',          value: d3Shape.curveCardinal },
        { name:'cardinalClosed',    value: d3Shape.curveCardinalClosed },
        { name:'cardinalOpen',      value: d3Shape.curveCardinalOpen },
        { name:'catmullRom',        value: d3Shape.curveCatmullRom },
        { name:'catmullRomClosed',  value: d3Shape.curveCatmullRomClosed },
        { name:'catmullRomOpen',    value: d3Shape.curveCatmullRomOpen },
        { name:'linear',            value: d3Shape.curveLinear },
        { name:'linearClosed',      value: d3Shape.curveLinearClosed },
        { name:'monotoneX',         value: d3Shape.curveMonotoneX },
        { name:'monotoneY',         value: d3Shape.curveMonotoneY },
        { name:'natural',           value: d3Shape.curveNatural },
        { name:'step',              value: d3Shape.curveStep },
        { name:'stepAfter',         value: d3Shape.curveStepAfter },
        { name:'stepBefore',        value: d3Shape.curveStepBefore }
    ];
    
    interpolationSelected:string = 'linear';
    
    interpolationsSelectList:Array<string> = this.interpolations.map( interpolation => interpolation.name );

    constructor() {}

    ionViewDidLoad() {

        this.createSvgPathsLines();

    }

    createSvgPathsLines(): void {

        let lineData = [
            { 'x': 1,       'y': 90},   { 'x': 20,  'y': 20 },
            { 'x': 40,      'y': 50},   { 'x': 60,  'y': 100 },
            { 'x': 80,      'y': 10},   { 'x': 100, 'y': 40 },
            { 'x': 120,     'y': 30},   { 'x': 140, 'y': 80 },
            { 'x': 160,     'y': 5},    { 'x': 180, 'y': 60 },
            { 'x': 200,     'y': 5},    { 'x': 220, 'y': 60 },
            { 'x': 240,     'y': 90},   { 'x': 260, 'y': 120 }];

        let lineGenerator = d3Shape.line<any>()
            .x( d => d.x )
            .y( d => d.y )
            .curve(this.interpolations.find( interpolation => interpolation.name === this.interpolationSelected ).value );

        d3.select( '#paths svg' ).remove();

        let svgContainer = d3.select( '#paths' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 200 )
            .style( 'border', '1px solid black' );

         svgContainer.append('path')
            .attr( 'd', lineGenerator( lineData ) )
            .attr( 'stroke', 'green' )
            .attr( 'stroke-width', 2 )
            .attr( 'fill', 'yellow' );

    }
}
