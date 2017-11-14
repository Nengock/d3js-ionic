import { Component } from '@angular/core';

import * as d3 from 'd3-selection';

@Component({
    selector: 'page-basic-shapes',
    templateUrl: 'basic-shapes.html',
})
export class BasicShapesPage {

    constructor() {}

    ionViewDidLoad() {
        
        this.createCircles();
        this.createRectangles();
        this.createEllipsis();
        this.createLines()
        
    }

    createCircles():void {

        let jsonCircles = [
            { 'x_axis': 30, 'y_axis': 30, 'radius': 20, 'color' : 'green' },
            { 'x_axis': 70, 'y_axis': 70, 'radius': 20, 'color' : 'purple'},
            { 'x_axis': 110, 'y_axis': 100, 'radius': 20, 'color' : 'red'}];

        let svgContainer = d3.select( '#circles' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 200 )
            .style( 'border', '1px solid black' );

        let circles = svgContainer.selectAll( 'circle' )
            .data( jsonCircles )
            .enter()
            .append( 'circle' );

        circles
            .attr( 'cx', d => d.x_axis )
            .attr( 'cy', d => d.y_axis )
            .attr( 'r', d => d.radius )
            .style( 'fill', d => d.color );

    }

    createRectangles():void {

        let jsonRectangles = [
            { 'x': 0,   'y': 0,     'width': 100,   'height': 80, 'color' : 'green' },
            { 'x': 110, 'y': 70,    'width': 70,    'height': 50, 'color' : 'purple'},
            { 'x': 200, 'y': 100,   'width': 50,    'height': 25, 'color' : 'red'}];

        let svgContainer = d3.select( '#rectangles' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 200 )
            .style( 'border', '1px solid black' );

        let rectangles = svgContainer.selectAll( 'rect' )
            .data( jsonRectangles )
            .enter()
            .append( 'rect' );

        rectangles
            .attr( 'x', d => d.x )
            .attr( 'y', d => d.y )
            .attr( 'width', d => d.width )
            .attr( 'height', d => d.height )
            .style( 'fill', d => d.color );

    }

    createEllipsis():void {

        let jsonEllipsis = [
            { 'cx': 50,     'cy': 20, 'rx': 50, 'ry': 20, 'color' : 'green' },
            { 'cx': 120,    'cy': 70, 'rx': 20, 'ry': 50, 'color' : 'purple' },
            { 'cx': 200,    'cy': 90, 'rx': 40, 'ry': 70, 'color' : 'red' }];

        let svgContainer = d3.select( '#ellipsis' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 200 )
            .style( 'border', '1px solid black' );

        let ellipses = svgContainer.selectAll( 'ellipse' )
            .data( jsonEllipsis )
            .enter()
            .append( 'ellipse' );

        ellipses
            .attr( 'cx', d => d.cx )
            .attr( 'cy', d => d.cy )
            .attr( 'rx', d => d.rx )
            .attr( 'ry', d => d.ry )
            .style( 'fill', d => d.color );

    }

    createLines():void {

        let jsonLines = [
            { 'x1': 0,      'y1': 0,    'x2': 100, 'y2': 90, width:2, 'color' : 'green' },
            { 'x1': 150,    'y1': 10,   'x2': 150, 'y2': 90, width:4, 'color' : 'purple' },
            { 'x1': 300,    'y1': 0,    'x2': 200, 'y2': 90, width:6, 'color' : 'red' }];

        let svgContainer = d3.select( '#lines' ).append( 'svg' )
            .attr( 'width', 300 )
            .attr( 'height', 200 )
            .style( 'border', '1px solid black' );

        let lines = svgContainer.selectAll('line' )
            .data( jsonLines )
            .enter()
            .append( 'line' );

        lines
            .attr( 'x1', d => d.x1 )
            .attr( 'y1', d => d.y1 )
            .attr( 'x2', d => d.x2 )
            .attr( 'y2', d => d.y2 )
            .attr( 'stroke-width', d => d.width )
            .attr( 'stroke', d => d.color );

    }
}
