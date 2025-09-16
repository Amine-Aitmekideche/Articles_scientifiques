import React from 'react';
import DataTable from 'react-data-table-component';
import FixedHeaderStory from 'react-data-table-component';

const columns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable:true,
  },
  {
    name: 'Email',
    selector: (row) => row.email,
    sortable:true,
    style: {
      
      whiteSpace: 'normal',
      width: '400px',

      whiteSpaceCollapse: 'collapse',
      textWrap: "wrap",
      overflow: 'hidden',
      textOverflow: 'ellipsis',

    },

  },
  {
    name: 'Age',
    selector: (row) => row.age,
    sortable:true,

  },
  {
    name: 'Sexe',
    selector: (row) => row.sexe,
    sortable:true,

  },
];

const data = [
  {
    id: 1,
    name: 'Amine',
    email: 'ami@example.com jshrf efuye gdr fy jeyfwrgy uegr3fr vvuyfeirfb  iuhiuh fref iuthgiru thgtrtg rt6g',
    age: 13,
    sexe: 'homme',
  },
  {
    id: 2,
    name: 'kkk',
    email: 'kkk@example.com',
    age: 55,
    sexe: 'homme',
  },
  {
    id: 3,
    name: 'Amine',
    email: 'ami@example.com',
    age: 66,
    sexe: 'homme',
  },
  {
    id: 4,
    name: 'ww',
    email: 'ww@example.com',
    age: 77,
    sexe: 'homme',
  },
  {
    id: 1,
    name: 'Amine',
    email: 'ami@example.com',
    age: 55,
    sexe: 'homme',
  },
  {
    id: 2,
    name: 'kkk',
    email: 'kkk@example.com',
    age: 130,
    sexe: 'homme',
  },
  {
    id: 3,
    name: 'Amine',
    email: 'ami@example.com',
    age: 135,
    sexe: 'homme',
  },
  {
    id: 4,
    name: 'ww',
    email: 'ww@example.com',
    age: 133,
    sexe: 'homme',
  },
  {
    id: 1,
    name: 'Amine',
    email: 'ami@example.com',
    age: 1355,
    sexe: 'homme',
  },
  {
    id: 2,
    name: 'kkk',
    email: 'kkk@example.com',
    age: 13,
    sexe: 'homme',
  },
  {
    id: 3,
    name: 'Amine',
    email: 'ami@example.com',
    age: 13,
    sexe: 'homme',
  },
  {
    id: 4,
    name: 'ww',
    email: 'ww@example.com',
    age: 13,
    sexe: 'homme',
  },
];


const DashBord = ({articules}) => {
    const ExpandableComponent = ({ data }) => (
        <div>
          {/* Le contenu supplémentaire à afficher lorsqu'une ligne est étendue */}
          <p>Autres détails: {data.age}</p>
        </div>
      );
    
      const ExpandedComponent = 
          ({data}) => <pre>{JSON.stringify(data.name)}</pre>;
  return (
    <div>
       {!data.length ? <p>There is no article</p> :
      <React.Fragment>
          <DataTable
        title="User Data"
        columns={columns}
        data={data}
        selectableRowsHighlight
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="500px"
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        theme="solarized"  
        // pagination
        // responsive
        customStyles={{
           DataTable: {
            style: {
              backgroundColor: 'red',
              color: '#333',
              border: 'none',

            },
          },
            rows: {
              style: {
                fontSize: '14px',
                color: '#333',
                border: 'none',
                backgroundColor: 'transparent',

              },
            },
            headCells: {
              style: {
                backgroundColor: 'yellow',
                fontSize: '16px',
                display: 'flex',
                justifyItems: 'center',
                alignContent: 'center',

              },
            },
            cells: {
                style: {
                  border:'1px solid red',
                 textAlign: 'center',
                  backgroundColor: 'transparent',
                  fontSize: '16px',
                  whiteSpace: 'normal',
                  padding: '0px',
                  margin: '0px',
                  whiteSpace: 'normal', // Pour que le texte continue sur plusieurs lignes
                 wordWrap: 'break-word',
                 display: 'table-cell',
               verticalAlign: 'inherit',
                  whiteSpaceCollapse: 'collapse',
                  textWrap: "wrap",
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  height: '400px',
                  width: '20px'


                },
              },
              td: {
                style:{
                  whiteSpace: 'normal', // Pour que le texte continue sur plusieurs lignes
                 wordWrap: 'break-word',
                display: 'table-cell',
                verticalAlign: 'inherit',
            }},
            pagination: {
              style: {
                display: 'none',
                borderTop: 'none',
                borderBottom: 'none',
              },
            },
          }}
      />
      </React.Fragment>
    
     
        }
    </div>
  );
};



export default DashBord
