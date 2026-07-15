import * as React from 'react';
import { DefaultButton, Panel, PrimaryButton, TextField } from '@fluentui/react';

const SurveyPanel=()=>{
    const [isOpen,setIsOpen]=React.useState<boolean>(false);

    const openPanel=()=>setIsOpen(true);
    const dismissPanel=()=>setIsOpen(false);

    const onRenderFooterContent=()=>(
        <div>
            <PrimaryButton
            onClick={dismissPanel} style={{marginRight:8}}
            text="Save"
            />
             <DefaultButton
            onClick={dismissPanel} 
            text="Save"
            />
        </div>
    );
    return(
        <>
        <PrimaryButton
        text="Open Survey Form" onClick={openPanel}
        />
        <Panel
        headerText='Employee Survey Form'
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel='Close'
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
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
        </Panel>
        </>
    )
}
export default SurveyPanel;