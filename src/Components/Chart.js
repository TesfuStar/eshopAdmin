import {useState,useEffect,useMemo} from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {userRequest} from '../request'
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  { name: "julay", Total: 1000 },
  { name: "augest", Total: 2700 },
];
const Chart = () => {
  const[status,SetStatus]= useState([])
  const MONTHS = useMemo(
    ()=>[
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "julay",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec"
    ],[]
  )
  useEffect(()=>{
    const getUserStatus=async()=>{
    try{
      const res = await userRequest.get('/user/status')
      res.data.map((item) =>
        SetStatus((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
    }catch(err){
    
    }
    }
    getUserStatus()
  },[MONTHS])
 
  return (
    <div className="bg-white shadow-lg m-2 p-2 ">
      <h4>active Users</h4>
      <ResponsiveContainer width="100%" height={360}>
        <AreaChart
          width={730}
          height={250}
          data={status}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22a6df" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="border border-gray-300" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;