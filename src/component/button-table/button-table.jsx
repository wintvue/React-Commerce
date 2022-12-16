import Stack from '@mui/material/Stack';
import './button-table.styles.css';
import categories from '../../utils/constants.js'


const ButtonTable = ({selectedCategory, setSelectedCategory}) => {
        return (
            <div style ={{
                display: 'grid',
                // flexDirection: 'row',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '20px 3px',
                marginRight: '5px'
            }}>
                {
                    categories.map((category) =>
                    
                    (
                        <button key={category}
                            className="category-btn"
                            style= {{
                                background: category === 
                                selectedCategory && "#1976d2"
                            }}
                            onClick= {
                               () => {
                                setSelectedCategory(category)
                                }
                            }
                        >
                        {category}
                        </button>
                    ))
                }
            </div>
        )
}

export default ButtonTable;
