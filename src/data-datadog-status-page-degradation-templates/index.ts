/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataDatadogStatusPageDegradationTemplatesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Filter the results to templates with this exact name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#name DataDatadogStatusPageDegradationTemplates#name}
  */
  readonly name?: string;
  /**
  * The ID of the status page whose degradation templates to list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#page_id DataDatadogStatusPageDegradationTemplates#page_id}
  */
  readonly pageId: string;
}
export interface DataDatadogStatusPageDegradationTemplatesDegradationTemplates {
}

export function dataDatadogStatusPageDegradationTemplatesDegradationTemplatesToTerraform(struct?: DataDatadogStatusPageDegradationTemplatesDegradationTemplates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataDatadogStatusPageDegradationTemplatesDegradationTemplatesToHclTerraform(struct?: DataDatadogStatusPageDegradationTemplatesDegradationTemplates): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatadogStatusPageDegradationTemplatesDegradationTemplates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatadogStatusPageDegradationTemplatesDegradationTemplates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // degradation_title - computed: true, optional: false, required: false
  public get degradationTitle() {
    return this.getStringAttribute('degradation_title');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference {
    return new DataDatadogStatusPageDegradationTemplatesDegradationTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates datadog_status_page_degradation_templates}
*/
export class DataDatadogStatusPageDegradationTemplates extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog_status_page_degradation_templates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplates resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatadogStatusPageDegradationTemplates to import
  * @param importFromId The id of the existing DataDatadogStatusPageDegradationTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatadogStatusPageDegradationTemplates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "datadog_status_page_degradation_templates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_templates datadog_status_page_degradation_templates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogStatusPageDegradationTemplatesConfig
  */
  public constructor(scope: Construct, id: string, config: DataDatadogStatusPageDegradationTemplatesConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_status_page_degradation_templates',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._pageId = config.pageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // degradation_templates - computed: true, optional: false, required: false
  private _degradationTemplates = new DataDatadogStatusPageDegradationTemplatesDegradationTemplatesList(this, "degradation_templates", false);
  public get degradationTemplates() {
    return this._degradationTemplates;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktn.stringToTerraform(this._name),
      page_id: cdktn.stringToTerraform(this._pageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_id: {
        value: cdktn.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
