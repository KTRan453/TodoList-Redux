import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { priorityFilterChange, searchFilterChange, statusFilterChange } from '../../redux/actions';
import {} from '../../redux/actions'



const { Search } = Input;

export default function Filters() {

  const dispatch = useDispatch()
  const [searchText,setSearchText] =useState('')
  const [filterStatus ,setFilterStatus] =useState('All')
  const [filterPriority,setFilterPriority] = useState([])



  const handleSearchTextChange = e =>{
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value)) //set lên state của store
  }

  const handleStatusOnchange  = (e) =>{
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) =>{
    // console.log(e) //multi select nên trả ra một []
    setFilterPriority(value)
    dispatch(priorityFilterChange(value))
  }

  return (
    <Row justify='center'>

      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text'  value = {searchText} onChange={handleSearchTextChange}/>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusOnchange}>  {/*value này là gì thì mặc định bên dưới sẽ dc tick */}
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>

      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handlePriorityChange}     
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>

    </Row>
  );
}
