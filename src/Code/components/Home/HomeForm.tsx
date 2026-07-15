import * as React from 'react';
import {ChoiceGroup, Dropdown, TextField} from '@fluentui/react';

const FormT=()=>{
    return(
        <>
        <h4>
            Employee Survey Form
        </h4>
        <hr/>
        <form>
            <TextField
            label="Name"
            placeholder="Enter your name"
            iconProps={{ iconName: 'Contact' }}
            type="text"
            />
            <TextField
            label="Email"
            placeholder="Enter your email"
            iconProps={{ iconName: 'mail' }}
            type="email"
            />

            <TextField
            label="Salary"
            prefix='$'
            suffix='USD'

            />
            <TextField
            label="Password"
            type="password"
            canRevealPassword={true}
            />
<Dropdown
options={[
{key:"HR",text:"HR"},
{key:"IT",text:"IT"}
]}
label='Department'
placeholder='--select--'
/>
<ChoiceGroup
options={[
    {key:"Male",text:"Male"},
    {key:"Female",text:"Female"}
]}
label='Gender'
/>
<TextField
label='Survey Questions'
rows={5}
multiline={true}
iconProps={{iconName:"message"}}
/>
        </form>
        </>
    )
}
export default FormT