import * as React from "react";
import { Dialog,DialogType,DefaultButton,PrimaryButton,TextField, DialogFooter } from "@fluentui/react";

const SurveyDialog=()=>{
    const [hideDialog,setHideDialog]=React.useState<boolean>(true);

    const showDialog=()=>setHideDialog(false);
    const closeDialog=()=>setHideDialog(true);

    const dialogContentProps={
        type:DialogType.normal,
        title:"Employee Sruvey Form",
        subText:"Please fill in the details below"
    }
    return(
        <>
        <PrimaryButton
        text ="Open Survey Dialog" onClick={showDialog}
        />
        <Dialog hidden={hideDialog}
        onDismiss={closeDialog}
        dialogContentProps={dialogContentProps}
        modalProps={{isBlocking:false}}
        minWidth={450}
        
        >
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

        </form>
<DialogFooter>
    <PrimaryButton onClick={closeDialog} text ="Save"/>
    <DefaultButton onClick={closeDialog} text ="Cancel"/>
</DialogFooter>
        </Dialog>
        </>
    )
}
export default SurveyDialog;