import React, {useState} from 'react';
import Airtable from 'airtable';
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base('app4Eb0X39KtGToOS');

const ReportForm = ({ date, id, initialNote }) => {
  const [note, setNote] = useState('')
  const [bartender, setBartender] = useState('')
  const [staff, setStaff] = useState()
  const [reachInBarOpen, setReachInBarOpen] = useState(0)
  const [reachInBarClosed, setReachInBarClosed] = useState(0)
  const [redFridgeOpen, setRedFridgeOpen] = useState(0)
  const [redFridgeClosed, setRedFridgeClosed] = useState(0)
  const [lowBoyKitchenOpen, setLowBoyKitchenOpen] = useState(0)
  const [lowBoyKitchenClosed, setLowBoyKitchenClosed] = useState(0)
  const [walkinOpen, setWalkinOpen] = useState(0)
  const [walkinClosed, setWalkinClosed] = useState(0)
  const [buttonName, setButtonName] = useState('Submit')
  const [buttonStyle, setButtonStyle] = useState('has-background-danger')

  function handleSubmit(e) {
    e.preventDefault();
    base('Logbook').update(id, {
      "Notes": note,
      "Staff": [
        "rechSv8MDgIA3f7U4"
      ],
      "Reach In (bar) Open": reachInBarOpen,
      "Reach In (bar) Close": reachInBarClosed,
      "Red Fridge Open": redFridgeOpen,
      "Red Fridge Close": redFridgeClosed,
      "Low Boy (kitchen) Open": lowBoyKitchenOpen,
      "Low Boy (kitchen) Close": lowBoyKitchenClosed,
      "Walk In Open": walkinOpen,
      "Walk In Close": walkinClosed
    }, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record.get('Date'));
    });
    
  }


  return (
    <div className="card">
      <header className="card-header">
        <p className="is-size-3 has-text-danger has-text-centered">
          {`Pete\'s Candy Store Logbook ${date}`}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
          <form
            name="bartender report form"
            onSubmit={e => handleSubmit(e)}
            method="POST"
          >
            <label className="label has-text-white">Bartender Report</label>
            <div className="field">
              <p className="control is-expanded">
                <textarea 
                  className="textarea"
                  name="note" 
                  value={note}
                  placeholder={initialNote}
                  onChange={e => setNote(e.target.value)}
                />
              </p>
            </div>

            <br />

            
            
          </form>

          </div>
        </div>
      </div>
    </div>
  )
}