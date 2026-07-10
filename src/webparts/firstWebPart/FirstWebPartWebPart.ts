import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneToggle,PropertyPaneDropdown,PropertyPaneSlider,PropertyPaneChoiceGroup,
  PropertyPaneCheckbox,
  
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'FirstWebPartWebPartStrings';
import FirstWebPart from './components/FirstWebPart';
import { IFirstWebPartProps } from './components/IFirstWebPartProps';

export interface IFirstWebPartWebPartProps {
  description: string;
  country:string;
  theme:string;
  age:number;
  enableFeature:boolean;
  showTitle:boolean;
}

export default class FirstWebPartWebPart extends BaseClientSideWebPart<IFirstWebPartWebPartProps> {

  private _isDarkTheme: boolean = false;
  private _environmentMessage: string = '';

  public render(): void {
    const element: React.ReactElement<IFirstWebPartProps> = React.createElement(
      FirstWebPart,
      {
        description: this.properties.description,
        isDarkTheme: this._isDarkTheme,
        environmentMessage: this._environmentMessage,
        hasTeamsContext: !!this.context.sdks.microsoftTeams,
        userDisplayName: this.context.pageContext.user.displayName,
        siteurl:this.context.pageContext.web.absoluteUrl,
      country:this.properties.country,
      theme:this.properties.theme,
      age:this.properties.age,
      enableFeature:this.properties.enableFeature,
      showTitle:this.properties.showTitle
      
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    return this._getEnvironmentMessage().then(message => {
      this._environmentMessage = message;
    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
            case 'TeamsModern':
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              environmentMessage = strings.UnknownEnvironment;
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    this._isDarkTheme = !!currentTheme.isInverted;
    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  //it will give you button to apply changes in property pane. if you set it to true then it will give you apply button and if you set it to false then it will not give you apply button. by default it is false.
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  //webpart lifecycle  oninit(), render(), ondispose(),

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('country',{
                  label:'Country',
                options:[
                  {key:'India',text:'India'},
                  {key:'USA',text:'USA'},
                  {key:'UK',text:'UK'},
                  {key:'Canada',text:'Canada'},
                ]
                }),
                PropertyPaneChoiceGroup('theme',{
                  label:'Theme',
                  options:[
                    {key:'light',text:'Light'},
                    {key:'dark',text:'Dark'}
                  ]
                }),
                PropertyPaneSlider('age',{
                  label:'Age',
                  min:18,
                  max:60,
                  value:25,
                  showValue:true,
                  step:1
                }),
                PropertyPaneToggle('enableFeature',{
                  label:'Enable Feature',
                  onText:'On',
                  offText:'Off'
                }),
                PropertyPaneCheckbox('showTitle',{
                  text:'Show Title',
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
