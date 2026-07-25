# `dataDatadogOrganizationSettings` Submodule <a name="`dataDatadogOrganizationSettings` Submodule" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrganizationSettings <a name="DataDatadogOrganizationSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings datadog_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettings(scope: Construct, id: string, config?: DataDatadogOrganizationSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig">DataDatadogOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig">DataDatadogOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings"></a>

```typescript
public putSettings(value: IResolvable | DataDatadogOrganizationSettingsSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

---

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.resetSettings"></a>

```typescript
public resetSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogOrganizationSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.publicId">publicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList">DataDatadogOrganizationSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicId`<sup>Required</sup> <a name="publicId" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.publicId"></a>

```typescript
public readonly publicId: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settings"></a>

```typescript
public readonly settings: DataDatadogOrganizationSettingsSettingsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList">DataDatadogOrganizationSettingsSettingsList</a>

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | DataDatadogOrganizationSettingsSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrganizationSettingsConfig <a name="DataDatadogOrganizationSettingsConfig" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

const dataDatadogOrganizationSettingsConfig: dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]</code> | settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsConfig.property.settings"></a>

```typescript
public readonly settings: IResolvable | DataDatadogOrganizationSettingsSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings#settings DataDatadogOrganizationSettings#settings}

---

### DataDatadogOrganizationSettingsSettings <a name="DataDatadogOrganizationSettingsSettings" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

const dataDatadogOrganizationSettingsSettings: dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.saml">saml</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]</code> | saml block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlAutocreateUsersDomains">samlAutocreateUsersDomains</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]</code> | saml_autocreate_users_domains block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlIdpInitiatedLogin">samlIdpInitiatedLogin</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]</code> | saml_idp_initiated_login block. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlStrictMode">samlStrictMode</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]</code> | saml_strict_mode block. |

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.saml"></a>

```typescript
public readonly saml: IResolvable | DataDatadogOrganizationSettingsSettingsSaml[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings#saml DataDatadogOrganizationSettings#saml}

---

##### `samlAutocreateUsersDomains`<sup>Optional</sup> <a name="samlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlAutocreateUsersDomains"></a>

```typescript
public readonly samlAutocreateUsersDomains: IResolvable | DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

saml_autocreate_users_domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings#saml_autocreate_users_domains DataDatadogOrganizationSettings#saml_autocreate_users_domains}

---

##### `samlIdpInitiatedLogin`<sup>Optional</sup> <a name="samlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlIdpInitiatedLogin"></a>

```typescript
public readonly samlIdpInitiatedLogin: IResolvable | DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

saml_idp_initiated_login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings#saml_idp_initiated_login DataDatadogOrganizationSettings#saml_idp_initiated_login}

---

##### `samlStrictMode`<sup>Optional</sup> <a name="samlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings.property.samlStrictMode"></a>

```typescript
public readonly samlStrictMode: IResolvable | DataDatadogOrganizationSettingsSettingsSamlStrictMode[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

saml_strict_mode block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/data-sources/organization_settings#saml_strict_mode DataDatadogOrganizationSettings#saml_strict_mode}

---

### DataDatadogOrganizationSettingsSettingsSaml <a name="DataDatadogOrganizationSettingsSettingsSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

const dataDatadogOrganizationSettingsSettingsSaml: dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml = { ... }
```


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

const dataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains: dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains = { ... }
```


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

const dataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin: dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin = { ... }
```


### DataDatadogOrganizationSettingsSettingsSamlStrictMode <a name="DataDatadogOrganizationSettingsSettingsSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

const dataDatadogOrganizationSettingsSettingsSamlStrictMode: dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrganizationSettingsSettingsList <a name="DataDatadogOrganizationSettingsSettingsList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get"></a>

```typescript
public get(index: number): DataDatadogOrganizationSettingsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>[]

---


### DataDatadogOrganizationSettingsSettingsOutputReference <a name="DataDatadogOrganizationSettingsSettingsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains">putSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin">putSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode">putSamlStrictMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlAutocreateUsersDomains">resetSamlAutocreateUsersDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlIdpInitiatedLogin">resetSamlIdpInitiatedLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlStrictMode">resetSamlStrictMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSaml` <a name="putSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml"></a>

```typescript
public putSaml(value: IResolvable | DataDatadogOrganizationSettingsSettingsSaml[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSaml.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

---

##### `putSamlAutocreateUsersDomains` <a name="putSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains"></a>

```typescript
public putSamlAutocreateUsersDomains(value: IResolvable | DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlAutocreateUsersDomains.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

---

##### `putSamlIdpInitiatedLogin` <a name="putSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin"></a>

```typescript
public putSamlIdpInitiatedLogin(value: IResolvable | DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlIdpInitiatedLogin.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

---

##### `putSamlStrictMode` <a name="putSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode"></a>

```typescript
public putSamlStrictMode(value: IResolvable | DataDatadogOrganizationSettingsSettingsSamlStrictMode[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.putSamlStrictMode.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

---

##### `resetSaml` <a name="resetSaml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSaml"></a>

```typescript
public resetSaml(): void
```

##### `resetSamlAutocreateUsersDomains` <a name="resetSamlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlAutocreateUsersDomains"></a>

```typescript
public resetSamlAutocreateUsersDomains(): void
```

##### `resetSamlIdpInitiatedLogin` <a name="resetSamlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlIdpInitiatedLogin"></a>

```typescript
public resetSamlIdpInitiatedLogin(): void
```

##### `resetSamlStrictMode` <a name="resetSamlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.resetSamlStrictMode"></a>

```typescript
public resetSamlStrictMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.privateWidgetShare">privateWidgetShare</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.saml">saml</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList">DataDatadogOrganizationSettingsSettingsSamlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole">samlAutocreateAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains">samlAutocreateUsersDomains</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled">samlCanBeEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint">samlIdpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin">samlIdpInitiatedLogin</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded">samlIdpMetadataUploaded</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlLoginUrl">samlLoginUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictMode">samlStrictMode</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList">DataDatadogOrganizationSettingsSettingsSamlStrictModeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput">samlAutocreateUsersDomainsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput">samlIdpInitiatedLoginInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlInput">samlInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictModeInput">samlStrictModeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateWidgetShare`<sup>Required</sup> <a name="privateWidgetShare" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.privateWidgetShare"></a>

```typescript
public readonly privateWidgetShare: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.saml"></a>

```typescript
public readonly saml: DataDatadogOrganizationSettingsSettingsSamlList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList">DataDatadogOrganizationSettingsSettingsSamlList</a>

---

##### `samlAutocreateAccessRole`<sup>Required</sup> <a name="samlAutocreateAccessRole" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateAccessRole"></a>

```typescript
public readonly samlAutocreateAccessRole: string;
```

- *Type:* string

---

##### `samlAutocreateUsersDomains`<sup>Required</sup> <a name="samlAutocreateUsersDomains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomains"></a>

```typescript
public readonly samlAutocreateUsersDomains: DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList</a>

---

##### `samlCanBeEnabled`<sup>Required</sup> <a name="samlCanBeEnabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlCanBeEnabled"></a>

```typescript
public readonly samlCanBeEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `samlIdpEndpoint`<sup>Required</sup> <a name="samlIdpEndpoint" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpEndpoint"></a>

```typescript
public readonly samlIdpEndpoint: string;
```

- *Type:* string

---

##### `samlIdpInitiatedLogin`<sup>Required</sup> <a name="samlIdpInitiatedLogin" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLogin"></a>

```typescript
public readonly samlIdpInitiatedLogin: DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList</a>

---

##### `samlIdpMetadataUploaded`<sup>Required</sup> <a name="samlIdpMetadataUploaded" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpMetadataUploaded"></a>

```typescript
public readonly samlIdpMetadataUploaded: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `samlLoginUrl`<sup>Required</sup> <a name="samlLoginUrl" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlLoginUrl"></a>

```typescript
public readonly samlLoginUrl: string;
```

- *Type:* string

---

##### `samlStrictMode`<sup>Required</sup> <a name="samlStrictMode" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictMode"></a>

```typescript
public readonly samlStrictMode: DataDatadogOrganizationSettingsSettingsSamlStrictModeList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList">DataDatadogOrganizationSettingsSettingsSamlStrictModeList</a>

---

##### `samlAutocreateUsersDomainsInput`<sup>Optional</sup> <a name="samlAutocreateUsersDomainsInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlAutocreateUsersDomainsInput"></a>

```typescript
public readonly samlAutocreateUsersDomainsInput: IResolvable | DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

---

##### `samlIdpInitiatedLoginInput`<sup>Optional</sup> <a name="samlIdpInitiatedLoginInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlIdpInitiatedLoginInput"></a>

```typescript
public readonly samlIdpInitiatedLoginInput: IResolvable | DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlInput"></a>

```typescript
public readonly samlInput: IResolvable | DataDatadogOrganizationSettingsSettingsSaml[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

---

##### `samlStrictModeInput`<sup>Optional</sup> <a name="samlStrictModeInput" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.samlStrictModeInput"></a>

```typescript
public readonly samlStrictModeInput: IResolvable | DataDatadogOrganizationSettingsSettingsSamlStrictMode[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettings">DataDatadogOrganizationSettingsSettings</a>

---


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get"></a>

```typescript
public get(index: number): DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains">DataDatadogOrganizationSettingsSettingsSamlAutocreateUsersDomains</a>

---


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get"></a>

```typescript
public get(index: number): DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLoginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin">DataDatadogOrganizationSettingsSettingsSamlIdpInitiatedLogin</a>

---


### DataDatadogOrganizationSettingsSettingsSamlList <a name="DataDatadogOrganizationSettingsSettingsSamlList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get"></a>

```typescript
public get(index: number): DataDatadogOrganizationSettingsSettingsSamlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSaml[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSaml;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSaml">DataDatadogOrganizationSettingsSettingsSaml</a>

---


### DataDatadogOrganizationSettingsSettingsSamlStrictModeList <a name="DataDatadogOrganizationSettingsSettingsSamlStrictModeList" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get"></a>

```typescript
public get(index: number): DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSamlStrictMode[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>[]

---


### DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference <a name="DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrganizationSettings } from '@cdktn/provider-datadog'

new dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatadogOrganizationSettingsSettingsSamlStrictMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-datadog.dataDatadogOrganizationSettings.DataDatadogOrganizationSettingsSettingsSamlStrictMode">DataDatadogOrganizationSettingsSettingsSamlStrictMode</a>

---



