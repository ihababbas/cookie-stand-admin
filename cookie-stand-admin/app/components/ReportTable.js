import React, { useState } from "react";
import {hours} from './data/hours.js'
import {hourlysales} from './data/hourly_sales.js'


export default function Table(props) {
  
const sum = hourlysales.reduce((a, b) => a + b)

const total = hourlysales.map(x => x * props.data.length);
const sumtotal = total.reduce((a, b) => a + b)
return (
    <>
    
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
                {hours.map((item) => {
               return (
                <th scope="col" class="px-3 py-3">
                  {item}
               </th>
               )} )}
            
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                  
            </tr>
        </thead>
        <tbody>
      
         
            { props.data.map((item, index) => {
                return (    
                    <tr>
                <th scope="col" class="px-6 py-3">
                {item.Location}
                </th>
            
            {
                hourlysales.map((item) => {
                return (
                <th scope="col" class="px-3 py-3">
                {item}
                </th>
                )} )}

                <th scope="col" class="px-6 py-3">
                    {sum}
                </th>
                </tr>
                )} )}


            
            
            <tr>
                <th scope="col" class="px-6 py-3">
                Total
                </th>
             
                {
                total.map((item) => {
                return (
                <th scope="col" class="px-3 py-3">
                {item}
                </th>
                )} )}
          
            
                <th scope="col" class="px-6 py-3">
                    {sumtotal}
                </th>
                  
            </tr>
        </tbody>
    </table>
</div>

    




    </>
)
}