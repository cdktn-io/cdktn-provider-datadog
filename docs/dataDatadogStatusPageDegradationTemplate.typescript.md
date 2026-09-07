# `dataDatadogStatusPageDegradationTemplate` Submodule <a name="`dataDatadogStatusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogStatusPageDegradationTemplate <a name="DataDatadogStatusPageDegradationTemplate" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

new dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate(scope: Construct, id: string, config: DataDatadogStatusPageDegradationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig">DataDatadogStatusPageDegradationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig">DataDatadogStatusPageDegradationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogStatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogStatusPageDegradationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogStatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogStatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.componentsAffected">componentsAffected</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList">DataDatadogStatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.degradationTitle">degradationTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.updates">updates</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList">DataDatadogStatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageIdInput">pageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageId">pageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `componentsAffected`<sup>Required</sup> <a name="componentsAffected" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.componentsAffected"></a>

```typescript
public readonly componentsAffected: DataDatadogStatusPageDegradationTemplateComponentsAffectedList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList">DataDatadogStatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `degradationTitle`<sup>Required</sup> <a name="degradationTitle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.degradationTitle"></a>

```typescript
public readonly degradationTitle: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updates`<sup>Required</sup> <a name="updates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.updates"></a>

```typescript
public readonly updates: DataDatadogStatusPageDegradationTemplateUpdatesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList">DataDatadogStatusPageDegradationTemplateUpdatesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pageIdInput`<sup>Optional</sup> <a name="pageIdInput" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageIdInput"></a>

```typescript
public readonly pageIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogStatusPageDegradationTemplateComponentsAffected <a name="DataDatadogStatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

const dataDatadogStatusPageDegradationTemplateComponentsAffected: dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected = { ... }
```


### DataDatadogStatusPageDegradationTemplateConfig <a name="DataDatadogStatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

const dataDatadogStatusPageDegradationTemplateConfig: dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.id">id</a></code> | <code>string</code> | The ID of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.pageId">pageId</a></code> | <code>string</code> | The ID of the status page this degradation template belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#id DataDatadogStatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pageId`<sup>Required</sup> <a name="pageId" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateConfig.property.pageId"></a>

```typescript
public readonly pageId: string;
```

- *Type:* string

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/data-sources/status_page_degradation_template#page_id DataDatadogStatusPageDegradationTemplate#page_id}

---

### DataDatadogStatusPageDegradationTemplateUpdates <a name="DataDatadogStatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

const dataDatadogStatusPageDegradationTemplateUpdates: dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogStatusPageDegradationTemplateComponentsAffectedList <a name="DataDatadogStatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

new dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.get"></a>

```typescript
public get(index: number): DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference <a name="DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

new dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected">DataDatadogStatusPageDegradationTemplateComponentsAffected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogStatusPageDegradationTemplateComponentsAffected;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateComponentsAffected">DataDatadogStatusPageDegradationTemplateComponentsAffected</a>

---


### DataDatadogStatusPageDegradationTemplateUpdatesList <a name="DataDatadogStatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

new dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.get"></a>

```typescript
public get(index: number): DataDatadogStatusPageDegradationTemplateUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogStatusPageDegradationTemplateUpdatesOutputReference <a name="DataDatadogStatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```typescript
import { dataDatadogStatusPageDegradationTemplate } from '@cdktn/provider-datadog'

new dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates">DataDatadogStatusPageDegradationTemplateUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogStatusPageDegradationTemplateUpdates;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogStatusPageDegradationTemplate.DataDatadogStatusPageDegradationTemplateUpdates">DataDatadogStatusPageDegradationTemplateUpdates</a>

---



