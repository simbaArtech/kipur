import React from "react";
import './GameStyle.css'

import { GRID_DATA } from "./consts";
  
  const CLUE_DATA = {
    'Ac1': {
      clue: 'דגן יצטרך (3,4)',
      answer: 'aaaaaaa',
      direction: 'across',
      number: 1,
      boxes: ['A12', 'A11', 'A10', 'A9', 'A8', 'A7', 'A6']
    },
    'Ac4': {
      clue: 'איבר פנימי (4)',
      answer: 'aaaa',
      direction: 'across',
      number: 4,
      boxes: ['A4', 'A3', 'A2', 'A1']
    },
    'Ac7': {
      clue: 'כשהפרות לא  (4)',
      answer: 'aaaa',
      direction: 'across',
      number: 7,
      boxes: ['C12', 'C11', 'C10', 'C9']
    },
    'Ac8': {
      clue: 'עני מוקף (7)',
      answer: 'aaaaaaa',
      direction: 'across',
      number: 8,
      boxes: ['C7', 'C6', 'C5', 'C4', 'C3', 'C2', 'C1']
    },
    'Ac10': {
      clue: 'מסרו את הגופה (6)',
      answer: 'aaaaaa',
      direction: 'across',
      number: 10,
      boxes: ['E12', 'E11', 'E10', 'E9', 'E8', 'E7']
    },
    'Ac12': {
      clue: 'חיה יונקת (5)',
      answer: 'aaaaa',
      direction: 'across',
      number: 12,
      boxes: ['F5', 'F4', 'F3', 'F2', 'F1']
    },
    'Ac13': {
      clue: 'העז שלי (5)',
      answer: 'aaaaa',
      direction: 'across',
      number: 12,
      boxes: ['G12', 'G11', 'G10', 'G9', 'G8']
    },
    'Ac15': {
      clue: 'סוג של (6)',
      answer: 'aaaaaa',
      direction: 'across',
      number: 15,
      boxes: ['H6', 'H5', 'H4', 'H3', 'H2', 'H1']
    },
    'Ac18': {
      clue: 'ברומניה אפשר (7)',
      answer: 'aaaaaaa',
      direction: 'across',
      number: 18,
      boxes: ['J12', 'J11', 'J10', 'J9', 'J8', 'J7', 'J6']
    },
    'Ac19': {
      clue: 'עם 3 מאונך (2, 2)',
      answer: 'aaaa',
      direction: 'across',
      number: 19,
      boxes: ['J4', 'J3', 'J2', 'J1']
    },
    'Ac20': {
      clue: 'הסכים לקבל את (4)',
      answer: 'aaaa',
      direction: 'across',
      number: 20,
      boxes: ['L12', 'L11', 'L10', 'L9']
    },
    'Ac21': {
      clue: 'החיידק סופר עבורה (7)',
      answer: 'aaaaaaa',
      direction: 'across',
      number: 21,
      boxes: ['L7', 'L6', 'L5', 'L4', 'L3', 'L2', 'L1']
    },
    'Dn1': {
      clue: 'בני הזוג לשעבר (5)',
      answer: 'aaaaa',
      direction: 'down',
      number: 1,
      boxes: ['A12', 'B12', 'C12', 'D12', 'E12']
    },
    'Dn2': {
      clue: 'א אוהל (5)',
      answer: 'aaaaa',
      direction: 'down',
      number: 2,
      boxes: ['A9', 'B9', 'C9', 'D9', 'E9']
    },
    'Dn3': {
      clue: 'ראה 19 מאוזן (5)',
      answer: 'aaaaa',
      direction: 'down',
      number: 3,
      boxes: ['A7', 'B7', 'C7', 'D7', 'E7']
    },
    'Dn5': {
      clue: 'הזמרת תזיז (4, 4)',
      answer: 'aaaaaaaa',
      direction: 'down',
      number: 5,
      boxes: ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3']
    },
    'Dn6': {
      clue: 'חצבו באבן (6)',
      answer: 'aaaaaa',
      direction: 'down',
      number: 6,
      boxes: ['A1', 'B1', 'C1', 'D1', 'E1', 'F1']
    },
    'Dn9': {
      clue: 'ארגון הכדורגל (4)',
      answer: 'aaaa',
      direction: 'down',
      number: 9,
      boxes: ['C5', 'D5', 'E5', 'F5']
    },
    'Dn11': {
      clue: 'חוללה פלאים (4, 4)',
      answer: 'aaaaaaaa',
      direction: 'down',
      number: 11,
      boxes: ['E10', 'F10', 'G10', 'H10', 'I10', 'J10', 'K10', 'L10']
    },
    'Dn13': {
      clue: 'מצער מאוד (6)',
      answer: 'aaaaaa',
      direction: 'down',
      number: 13,
      boxes: ['G12', 'H12', 'I12', 'J12', 'K12', 'L12']
    },
    'Dn14': {
      clue: 'ישתמש בגרונו (4)',
      answer: 'aaaa',
      direction: 'down',
      number: 14,
      boxes: ['G8', 'H8', 'I8', 'J8']
    },
    'Dn15': {
      clue: 'אני מבולבל (5)',
      answer: 'aaaaa',
      direction: 'down',
      number: 15,
      boxes: ['H6', 'I6', 'J6', 'K6', 'L6']
    },
    'Dn16': {
      clue: 'יכינו אוכל (5)',
      answer: 'aaaaa',
      direction: 'down',
      number: 16,
      boxes: ['H4', 'I4', 'J4', 'K4', 'L4']
    },
    'Dn17': {
      clue: 'התבאסה כי (5)',
      answer: 'aaaaa',
      direction: 'down',
      number: 17,
      boxes: ['H1', 'I1', 'J1', 'K1', 'L1']
    },
    
  };
  
  class Crossword extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        grid: GRID_DATA,
        clues: CLUE_DATA,
        activeClueBoxes: CLUE_DATA['Ac1'].boxes,
        activeClue: ['Ac1'],
        boxInFocus: CLUE_DATA['Ac1'].boxes[0]
      };
      
      this.setActiveClueBoxes = this.setActiveClueBoxes.bind(this);
      this.setActiveClue = this.setActiveClue.bind(this);
      this.setBoxInFocus = this.setBoxInFocus.bind(this);
    }
    
    setActiveClueBoxes(boxes) {
      this.setState({
        activeClueBoxes: boxes
      });
    }
    
    setActiveClue(clue) {
      this.setState({
        activeClue: clue
      });
    }
    
    setBoxInFocus(box) {
      this.setState({
        boxInFocus: box
      });
    }
    
    render() {
      return (
        <div className="crossword">
          {/* <Clues clues={ this.state.clues } setActiveClueBoxes={ this.setActiveClueBoxes } activeClue={ this.state.activeClue } setActiveClue={ this.setActiveClue } setBoxInFocus={ this.setBoxInFocus } /> */}
          <Board grid={ this.state.grid } allClues={ this.state.clues } clues={ this.state.clues } setActiveClueBoxes={ this.setActiveClueBoxes } highlightedBoxes={ this.state.activeClueBoxes } setActiveClue = { this.setActiveClue } setBoxInFocus={ this.setBoxInFocus } boxInFocus={ this.state.boxInFocus }/>
        </div>
      );
    }
  }
  
  class Clues extends React.Component {
    constructor(props) {
      super(props);
      const cluesAcross = [];
      const cluesDown = [];
      
      for (const key in this.props.clues) {
        const clue = this.props.clues[key];
        clue.id = key;
        if (clue.direction === 'across') {
          cluesAcross.push(clue);
        }
        else {
          cluesDown.push(clue);
        }
      }
      
      this.state = {
        across: cluesAcross,
        down: cluesDown
      };
    }
    
    render() {
      return (
        <div className="clue-lists">
          <div className="clue-list-wrapper">
            <h2>Across</h2>
            <ol className="clue-list">
              { this.state.across.map((clueData) => <Clue key={ clueData.id } clueID={ clueData.id } clueText={ clueData.clue } clueNumber={ clueData.number } clueBoxes={ clueData.boxes } setActiveClueBoxes={ this.props.setActiveClueBoxes } setActiveClue={ this.props.setActiveClue } isActive={ this.props.activeClue.indexOf(clueData.id) > -1 } setBoxInFocus={ this.props.setBoxInFocus }/>) }
            </ol>
          </div>
          <div className="clue-list-wrapper">
            <h2>Down</h2>
            <ol className="clue-list">
              { this.state.down.map((clueData) => <Clue key={ clueData.id } clueID={ clueData.id } clueText={ clueData.clue } clueNumber={ clueData.number } clueBoxes={ clueData.boxes } setActiveClueBoxes={ this.props.setActiveClueBoxes } setActiveClue={ this.props.setActiveClue } isActive={ this.props.activeClue.indexOf(clueData.id) > -1 } setBoxInFocus={ this.props.setBoxInFocus }/>)
              }
            </ol>
          </div>
        </div>
      );
    }
  }
  
  class Clue extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: props.isActive
      };
      
      this.handleClick = this.handleClick.bind(this);
    }
    
    componentWillReceiveProps(newProps) {
      this.setState({
        active: newProps.isActive
      });
    }
    
    handleClick() {
      const activeClue = [];
      activeClue.push(this.props.clueID);
      this.props.setActiveClueBoxes(this.props.clueBoxes);
      this.props.setActiveClue(activeClue);
      this.props.setBoxInFocus(this.props.clueBoxes[0]);
    }
    
    render() {
      return (
        <li className={`clue ${ this.state.active ? 'active' : ''}`}>
          <button className="clue-button" onClick={ this.handleClick }>
            <span className="clue-number">{ this.props.clueNumber }.</span>
            <span className="clue-text">{ this.props.clueText }</span>
          </button>
        </li>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div className="crossword-board">
          { this.props.grid.map((box) => {
            const { id, letter, clues, label } = box;
            return <Box key={ id } id={ id } letter={ letter } boxClues = { clues } label={ label } allClues={ this.props.allClues } isHighlighted={ this.props.highlightedBoxes.indexOf(id) > -1 } setActiveClueBoxes={ this.props.setActiveClueBoxes } setActiveClue={ this.props.setActiveClue } setBoxInFocus={ this.props.setBoxInFocus } isInFocus={ this.props.boxInFocus == id }/>
            })
          }
        </div>
      );
    }
  }
  
  class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        highlight: props.isHighlighted,
        isInFocus: props.isInFocus
      };
   
      this.handleFocus = this.handleFocus.bind(this);
    }
    
    componentWillReceiveProps(newProps) {
      this.setState({
        highlight: newProps.isHighlighted,
        isInFocus: newProps.isInFocus
      });
    }
    
    componentDidUpdate() {
      if (this.state.isInFocus) {
         this.textInput.focus();
      }
    }
    
    handleFocus(event) {
      this.props.setActiveClue(this.props.boxClues);
      
      let boxesToHighlight = [];
      
      for (const clue of this.props.boxClues) {
        boxesToHighlight = boxesToHighlight.concat(this.props.allClues[clue].boxes);
      }
      
      this.props.setActiveClueBoxes(boxesToHighlight);
      this.props.setBoxInFocus(event.target.id);
    }
    
    render() {
      let visibleLabel;
      let input;
      
      if (this.props.label) {
        visibleLabel = <span className="box-label">{ this.props.label }</span>
      }
      
      if (this.props.letter) {  
        input = <input type="text" maxLength="1" className={ `box-input ${this.state.highlight ? 'highlight' : ''}` } onFocus={ this.handleFocus } ref={(input) => { this.textInput = input }} />
      }
      
     return (
      <div className={ `box ${!this.props.letter ? ' blank' : ''}` }>
         { visibleLabel }
         { input }
      </div>
     );    
    }
  }
  
  export default Crossword;